// FAQ data (bilingual)
const faqData = [
    {
        q_en: "What is included in the 7-in-1 Solar Home Kit?",
        a_en: "The kit includes: Solar Panel (35W), Multipurpose Board, Fan + Light, Bluetooth Speaker, Emergency Light, Torch, and 2 LED Bulbs. Everything you need for power, lighting, charging, and entertainment.",
        q_hi: "7-इन-1 सोलर होम किट में क्या शामिल है?",
        a_hi: "किट में शामिल हैं: सोलर पैनल (35W), मल्टीपर्पस बोर्ड, पंखा + लाइट, ब्लूटूथ स्पीकर, इमरजेंसी लाइट, टॉर्च और 2 एलईडी बल्ब। बिजली, लाइटिंग, चार्जिंग और मनोरंजन के लिए सब कुछ।"
    },
    {
        q_en: "Does the kit work without electricity?",
        a_en: "Yes, VIGRID works completely on solar power. No grid electricity required.",
        q_hi: "क्या किट बिना बिजली के काम करता है?",
        a_hi: "हाँ, विग्रिड पूरी तरह से सौर ऊर्जा पर काम करता है। ग्रिड बिजली की आवश्यकता नहीं है।"
    },
    {
        q_en: "How long does the battery last on a full charge?",
        a_en: "Depending on usage, the products give 4–6 hours of backup. The multipurpose board (20000mAh) can power devices longer.",
        q_hi: "पूर्ण चार्ज होने पर बैटरी कितनी देर चलती है?",
        a_hi: "उपयोग के अनुसार, उत्पाद 4–6 घंटे का बैकअप देते हैं। मल्टीपर्पस बोर्ड (20000mAh) उपकरणों को अधिक समय तक चला सकता है।"
    },
    {
        q_en: "Can I charge mobile phones with this kit?",
        a_en: "Yes, the multipurpose board has 2 USB outputs (5V) for charging mobile phones and other devices.",
        q_hi: "क्या मैं इस किट से मोबाइल फोन चार्ज कर सकता हूँ?",
        a_hi: "हाँ, मल्टीपर्पस बोर्ड में मोबाइल फोन और अन्य डिवाइस चार्ज करने के लिए 2 USB आउटपुट (5V) हैं।"
    },
    {
        q_en: "Is the kit safe for children?",
        a_en: "Absolutely. All products are designed with safety in mind – no exposed wires, overcharge protection, and durable casing.",
        q_hi: "क्या किट बच्चों के लिए सुरक्षित है?",
        a_hi: "बिल्कुल। सभी उत्पाद सुरक्षा को ध्यान में रखकर डिज़ाइन किए गए हैं – कोई खुला तार नहीं, ओवरचार्ज सुरक्षा और टिकाऊ आवरण।"
    },
    {
        q_en: "How do I install the solar home kit?",
        a_en: "It's plug-and-play. Place the solar panel in sunlight, connect to the multipurpose board, and your devices are ready to use. No technical knowledge required.",
        q_hi: "सोलर होम किट कैसे स्थापित करूं?",
        a_hi: "यह प्लग-एंड-प्ले है। सोलर पैनल को धूप में रखें, मल्टीपर्पस बोर्ड से कनेक्ट करें, और आपके डिवाइस उपयोग के लिए तैयार हैं। किसी तकनीकी ज्ञान की आवश्यकता नहीं है।"
    },
    {
        q_en: "What is the warranty period?",
        a_en: "We offer 1 year warranty on all products. Extended warranty options are available on request.",
        q_hi: "वारंटी अवधि क्या है?",
        a_hi: "हम सभी उत्पादों पर 1 साल की वारंटी प्रदान करते हैं। अनुरोध पर विस्तारित वारंटी विकल्प उपलब्ध हैं।"
    },
    {
        q_en: "Can I buy the kit online?",
        a_en: "Yes, you can place an order through our website or contact our sales team directly.",
        q_hi: "क्या मैं किट ऑनलाइन खरीद सकता हूँ?",
        a_hi: "हाँ, आप हमारी वेबसाइट के माध्यम से ऑर्डर कर सकते हैं या सीधे हमारी बिक्री टीम से संपर्क कर सकते हैं।"
    }
];

let currentLang = 'en';

function buildFAQ() {
    const container = document.getElementById('faqGrid');
    if (!container) return;
    container.innerHTML = '';
    faqData.forEach((item, index) => {
        const question = currentLang === 'en' ? item.q_en : item.q_hi;
        const answer = currentLang === 'en' ? item.a_en : item.a_hi;
        const faqDiv = document.createElement('div');
        faqDiv.className = 'faq-item';
        faqDiv.innerHTML = `
            <div class="faq-question">
                <span>${question}</span>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-answer">${answer}</div>
        `;
        faqDiv.addEventListener('click', () => {
            faqDiv.classList.toggle('active');
        });
        container.appendChild(faqDiv);
    });
}

// Translations for page text (nav, headings, footer, etc.)
const pageTranslations = {
    en: {
        nav_home: "Home", nav_about: "About Us", nav_products: "Products", nav_impact: "Impact", nav_faq: "FAQ", nav_contact: "Contact",
        faq_heading: "FREQUENTLY ASKED QUESTIONS", faq_sub: "Find answers to common questions about VIGRID solar home kits.",
        faq_cta_title: "Still have questions?", faq_cta_desc: "We’re here to help you bring light to your home.", faq_cta_btn: "CONTACT US",
        footer_quick: "QUICK LINKS", footer_home: "Home", footer_about: "About Us", footer_products: "Products", footer_impact: "Impact", footer_faq: "FAQ", footer_contact: "Contact",
        footer_reg: "REGISTRATION", footer_reg_label: "UDYAM REGISTRATION NUMBER", footer_tagline: "Light Today, Bright Future.",
        footer_newsletter: "NEWSLETTER", newsletter_desc: "Subscribe to get the latest updates and news from VIGRID.",
        subscribe_btn: "SUBSCRIBE", copyright_text: "© 2026 VIGRID. All rights reserved. | Empowering rural India with clean energy"
    },
    hi: {
        nav_home: "होम", nav_about: "हमारे बारे में", nav_products: "उत्पाद", nav_impact: "प्रभाव", nav_faq: "अक्सर पूछे जाने वाले प्रश्न", nav_contact: "संपर्क करें",
        faq_heading: "अक्सर पूछे जाने वाले प्रश्न", faq_sub: "विग्रिड सोलर होम किट के बारे में सामान्य प्रश्नों के उत्तर खोजें।",
        faq_cta_title: "अभी भी प्रश्न हैं?", faq_cta_desc: "हम आपके घर में रोशनी लाने में आपकी मदद करने के लिए यहाँ हैं।", faq_cta_btn: "संपर्क करें",
        footer_quick: "त्वरित लिंक", footer_home: "होम", footer_about: "हमारे बारे में", footer_products: "उत्पाद", footer_impact: "प्रभाव", footer_faq: "अक्सर पूछे जाने वाले प्रश्न", footer_contact: "संपर्क करें",
        footer_reg: "पंजीकरण", footer_reg_label: "उद्यम पंजीकरण संख्या", footer_tagline: "आज रोशनी, उज्ज्वल भविष्य।",
        footer_newsletter: "न्यूज़लेटर", newsletter_desc: "विग्रिड से नवीनतम अपडेट और समाचार प्राप्त करने के लिए सदस्यता लें।",
        subscribe_btn: "सदस्यता लें", copyright_text: "© 2026 विग्रिड. सर्वाधिकार सुरक्षित। | स्वच्छ ऊर्जा से ग्रामीण भारत को सशक्त बनाना"
    }
};

function updatePageText(lang) {
    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (pageTranslations[lang] && pageTranslations[lang][key]) {
            if (el.children.length === 0 || el.tagName === 'BUTTON') {
                el.textContent = pageTranslations[lang][key];
            } else {
                const textNode = Array.from(el.childNodes).find(n => n.nodeType === 3);
                if (textNode) textNode.textContent = pageTranslations[lang][key];
            }
        }
    });
    // Update language toggle button texts (both desktop and mobile)
    const desktopToggleText = document.getElementById('langToggleText');
    const mobileToggleText = document.getElementById('mobileLangText');
    if (desktopToggleText) {
        desktopToggleText.innerText = lang === 'en' ? 'हिंदी' : 'English';
    }
    if (mobileToggleText) {
        mobileToggleText.innerText = lang === 'en' ? 'हिंदी' : 'English';
    }
    // Update newsletter placeholder
    const newsEmail = document.getElementById('footerNewsEmail');
    if (newsEmail) newsEmail.placeholder = lang === 'en' ? 'Enter your email' : 'अपना ईमेल दर्ज करें';
}

function toggleLang() {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    updatePageText(currentLang);
    buildFAQ();
    localStorage.setItem('vigrid_lang_faq', currentLang);
}

document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('vigrid_lang_faq');
    if (saved && (saved === 'en' || saved === 'hi')) currentLang = saved;
    updatePageText(currentLang);
    buildFAQ();

    const desktopLangBtn = document.getElementById('langToggleBtn');
    const mobileLangBtn = document.getElementById('mobileLangSwitch');
    if (desktopLangBtn) desktopLangBtn.addEventListener('click', toggleLang);
    if (mobileLangBtn) mobileLangBtn.addEventListener('click', toggleLang);

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
    document.querySelectorAll('.copyright i').forEach(icon => {
        icon.style.cursor = 'pointer';
        icon.addEventListener('click', () => alert('🌍 ' + (currentLang === 'en' ? 'Connect with VIGRID on social media!' : 'सोशल मीडिया पर विग्रिड से जुड़ें!')));
    });
});