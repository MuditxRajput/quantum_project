import React from 'react';
import { useSelector } from 'react-redux';
import MobileMenu from '../Components/MobileMenu';

const AboutUs = () => {
  const isOpen = useSelector((state)=>state.user?.mobileMenu);
  return (
    <>

    
    {isOpen && <MobileMenu/>}
    <section class="">
    <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="max-w-lg">
                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
                <p class="mt-4 text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                Welcome to AktuQuantumHub! We're your one-stop destination for AKTU B.Tech Quantum PDFs. We offer a vast collection of high-quality study materials, organized by branches and years, all for free.

Our Mission
Our mission is simple: to make learning easier for AKTU B.Tech students. We provide reliable Quantum PDFs to aid in exams, assignments, and understanding complex concepts.

What We Offer
Extensive Collection: Find Quantum PDFs for all branches and years.

Quality Resources: Our materials are sourced from reputable sources for accuracy and reliability.

Accessibility: All our resources are freely accessible to support students from all backgrounds.

How We Help
Study Support: Get assistance for exams, assignments, and deeper understanding.

Time-Saving: Save time with quick access to all your study materials.

Comprehensive Coverage: From basics to advanced topics, we cover it all.

Get Involved
We welcome contributions from the community. Share your study notes, lecture slides, or practice problems with us.

Contact Us
Have questions or feedback? Reach out via email or our contact form. We value your input!

Thanks for choosing AktuQuantumHub for your AKTU B.Tech Quantum PDF needs. We're here to support you!.</p>
                
            </div>
            <div class="mt-12 md:mt-0">
                <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" class="object-cover rounded-lg shadow-md"/>
            </div>
        </div>
    </div>
</section>
</>
  )
}

export default AboutUs

