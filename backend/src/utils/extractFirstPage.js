import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import { PDFDocument } from 'pdf-lib';
import pdfToImage from 'pdf-to-img';

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_API,
});

// Function to read file asynchronously
const readFileAsync = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
};

// Function to extract the first page of a PDF, convert it to an image, and upload to Cloudinary
const getFirstPage = async (localFile) => {
    try {
        // Read the PDF file
        const pdfBuffer = await readFileAsync(localFile);
        const pdfDoc = await PDFDocument.load(pdfBuffer);

        // Get the first page of the PDF
        const firstPage = pdfDoc.getPage(0);

        // Convert PDF to image
        const converter = pdfToImage(pdfBuffer, {
            convertOptions: {
                '-quality': '100', // Set image quality to 100%
                '-density': '300', // Set image density (DPI) to 300
                '-trim': null      // Trim the image (remove white spaces)
            }
        });

        // Convert the first page of PDF to an image
        const imagePaths = await converter.convert();

        // Upload the image to Cloudinary
        const uploadResult = await cloudinary.uploader.upload(imagePaths[0], { folder: 'cover-images' });

        // Return the secure URL of the uploaded image
        return uploadResult.secure_url;
    } catch (error) {
        console.error('Error extracting first page as image and uploading to Cloudinary:', error);
        throw error;
    }
};

export { getFirstPage };
