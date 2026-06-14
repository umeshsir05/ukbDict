// Translations for Contact page (English + Hindi)
const contactTranslations = {
    en: {
        nav_home: "Home", nav_about: "About Us", nav_products: "Products", nav_impact: "Impact", nav_faq: "FAQ", nav_contact: "Contact",
        contact_heading: "CONTACT US", contact_tagline: "Let’s bring light, hope and a better future to every rural home.",
        get_in_touch: "Get in Touch",
        address_title: "Registered Office", address_line1: "VIGRID Solar Pvt. Ltd.", address_line2: "Bilaspur, Chhattisgarh, India - 492001",
        phone_title: "Phone", phone_number: "+91 7354336046",
        email_title: "Email",
        hours_title: "Business Hours", hours: "Mon – Sat: 9:00 AM – 6:00 PM",
        send_message: "Send us a Message",
        full_name: "Full Name", email_address: "Email Address", phone_optional: "Phone Number (Optional)",
        subject: "Subject", message: "Your Message", send_btn: "SEND MESSAGE",
        contact_image_caption: "Together, let’s power every home with clean energy.",
        chat_whatsapp: "Chat with us on WhatsApp",
        footer_quick: "QUICK LINKS", footer_home: "Home", footer_about: "About Us", footer_products: "Products", footer_impact: "Impact", footer_faq: "FAQ", footer_contact: "Contact",
        footer_reg: "REGISTRATION", footer_reg_label: "UDYAM REGISTRATION NUMBER", footer_tagline: "Light Today, Bright Future.",
        footer_newsletter: "NEWSLETTER", newsletter_desc: "Subscribe to get the latest updates and news from VIGRID.",
        subscribe_btn: "SUBSCRIBE", copyright_text: "© 2024 VIGRID. All rights reserved. | Empowering rural India with clean energy"
    },
    hi: {
        nav_home: "होम", nav_about: "हमारे बारे में", nav_products: "उत्पाद", nav_impact: "प्रभाव", nav_faq: "अक्सर पूछे जाने वाले प्रश्न", nav_contact: "संपर्क करें",
        contact_heading: "संपर्क करें", contact_tagline: "आइए, हर ग्रामीण घर में रोशनी, आशा और बेहतर भविष्य लाएँ।",
        get_in_touch: "संपर्क में रहें",
        address_title: "पंजीकृत कार्यालय", address_line1: "विग्रिड सोलर प्रा. लि.", address_line2: "बिलासपुर, छत्तीसगढ़, भारत - 492001",
        phone_title: "फ़ोन", phone_number: "+91 +91 7354336046",
        email_title: "ईमेल",
        hours_title: "कार्य समय", hours: "सोम – शनि: सुबह 9:00 – शाम 6:00",
        send_message: "हमें संदेश भेजें",
        full_name: "पूरा नाम", email_address: "ईमेल पता", phone_optional: "फ़ोन नंबर (वैकल्पिक)",
        subject: "विषय", message: "आपका संदेश", send_btn: "संदेश भेजें",
        contact_image_caption: "आइए, मिलकर हर घर को स्वच्छ ऊर्जा से सशक्त बनाएँ।",
        chat_whatsapp: "व्हाट्सएप पर चैट करें",
        footer_quick: "त्वरित लिंक", footer_home: "होम", footer_about: "हमारे बारे में", footer_products: "उत्पाद", footer_impact: "प्रभाव", footer_faq: "अक्सर पूछे जाने वाले प्रश्न", footer_contact: "संपर्क करें",
        footer_reg: "पंजीकरण", footer_reg_label: "उद्यम पंजीकरण संख्या", footer_tagline: "आज रोशनी, उज्ज्वल भविष्य।",
        footer_newsletter: "न्यूज़लेटर", newsletter_desc: "विग्रिड से नवीनतम अपडेट और समाचार प्राप्त करने के लिए सदस्यता लें।",
        subscribe_btn: "सदस्यता लें", copyright_text: "© 2024 विग्रिड. सर्वाधिकार सुरक्षित। | स्वच्छ ऊर्जा से ग्रामीण भारत को सशक्त बनाना"
    }
};

let currentLang = 'en';

function updateContactPage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (contactTranslations[lang] && contactTranslations[lang][key]) {
            if (el.children.length === 0 || el.tagName === 'BUTTON' || el.tagName === 'INPUT') {
                el.textContent = contactTranslations[lang][key];
            } else {
                const textNode = Array.from(el.childNodes).find(n => n.nodeType === 3);
                if (textNode) textNode.textContent = contactTranslations[lang][key];
                else el.innerHTML = contactTranslations[lang][key];
            }
        }
    });
    // Update toggle buttons
    const desktopToggle = document.getElementById('langToggleText');
    const mobileToggle = document.getElementById('mobileLangText');
    if (desktopToggle) desktopToggle.innerText = lang === 'en' ? 'हिंदी' : 'English';
    if (mobileToggle) mobileToggle.innerText = lang === 'en' ? 'हिंदी' : 'English';
    // Update placeholders in form inputs (manual because they don't use data-i18n)
    const fullName = document.getElementById('fullName');
    const emailAddress = document.getElementById('emailAddress');
    const phoneNumber = document.getElementById('phoneNumber');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    if (fullName) fullName.placeholder = lang === 'en' ? 'Full Name' : 'पूरा नाम';
    if (emailAddress) emailAddress.placeholder = lang === 'en' ? 'Email Address' : 'ईमेल पता';
    if (phoneNumber) phoneNumber.placeholder = lang === 'en' ? 'Phone Number (Optional)' : 'फ़ोन नंबर (वैकल्पिक)';
    if (subject) subject.placeholder = lang === 'en' ? 'Subject' : 'विषय';
    if (message) message.placeholder = lang === 'en' ? 'Your Message' : 'आपका संदेश';
    // Newsletter placeholder
    const newsEmail = document.getElementById('footerNewsEmail');
    if (newsEmail) newsEmail.placeholder = lang === 'en' ? 'Enter your email' : 'अपना ईमेल दर्ज करें';
}

function toggleLang() {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    updateContactPage(currentLang);
    localStorage.setItem('vigrid_lang_contact', currentLang);
}

document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('vigrid_lang_contact');
    if (saved && (saved === 'en' || saved === 'hi')) currentLang = saved;
    updateContactPage(currentLang);

    document.getElementById('langToggleBtn')?.addEventListener('click', toggleLang);
    document.getElementById('mobileLangSwitch')?.addEventListener('click', toggleLang);

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
        document.addEventListener('click', (event) => {
            if (navLinks.classList.contains('active') && !navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
        navLinks.querySelectorAll('a, .mobile-lang-switch').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // Contact form submission (demo)
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            formFeedback.innerHTML = '<span style="color: #2c5e2a;">✅ ' + (currentLang === 'en' ? 'Thank you! We will get back to you soon.' : 'धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।') + '</span>';
            contactForm.reset();
            setTimeout(() => formFeedback.innerHTML = '', 5000);
        });
    }

    // Footer newsletter
    const footerBtn = document.getElementById('footerNewsBtn');
    const footerEmail = document.getElementById('footerNewsEmail');
    const footerFeed = document.getElementById('footerNewsFeedback');
    if (footerBtn && footerEmail) {
        footerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const email = footerEmail.value.trim();
            if (!email || !/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/.test(email)) {
                footerFeed.innerHTML = '<span style="color:#ffcc80;">⚠️ ' + (currentLang === 'en' ? 'Valid email required' : 'मान्य ईमेल आवश्यक') + '</span>';
                return;
            }
            footerFeed.innerHTML = '<span style="color:#c8e6b5;">✅ ' + (currentLang === 'en' ? 'Subscribed!' : 'सदस्यता ली गई!') + '</span>';
            footerEmail.value = '';
            setTimeout(() => footerFeed.innerHTML = '', 3000);
        });
    }

    // Social icons alert
    document.querySelectorAll('.copyright i, .social-contact a').forEach(icon => {
        icon.style.cursor = 'pointer';
        icon.addEventListener('click', () => alert('🌍 ' + (currentLang === 'en' ? 'Connect with VIGRID on social media!' : 'सोशल मीडिया पर विग्रिड से जुड़ें!')));
    });
});
