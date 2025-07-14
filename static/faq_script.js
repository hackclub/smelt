const faqData = [
    {
        question: "What is lorem ipsum?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        question: "Can I see a Game of Thrones ipsum?",
        answer: "Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor... Hodor hodor hodor..."
    },
    {
        question: "Is a Trump ipsum possible?",
        answer: "Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen. Does everybody know that pig named Lorem Ipsum? An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud."
    },
    {
        question: "How about an academic ipsum?",
        answer: "If one examines precultural libertarianism, one is faced with a choice: either accept rationalism or conclude that context is a product of the masses, given that Marx’s essay on precultural libertarianism is invalid. The subject is contextualised into a precapitalist dematerialism that includes culture as a reality."
    },
    {
        question: "Is a Breaking Bad ipsum also possible?",
        answer: "A business big enough that it could be listed on the NASDAQ goes belly up. Disappears! It ceases to exist without me. No, you clearly don't know who you're talking to, so let me clue you in. I am not in danger, Skyler. I AM the danger! A guy opens his door and gets shot and you think that of me? No. I am the one who knocks!"},
    {   
        question: "What does a hipster ipsum look like?",
        answer: "Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth stumptown gastropub cornhole celiac swag. Brunch raclette vexillologist post-ironic glossier ennui XOXO mlkshk godard pour-over blog tumblr humblebrag. Blue bottle put a bird on it twee prism biodiesel brooklyn. Blue bottle ennui tbh succulents."
    },
];

const faqsContainer = document.getElementById('FAQs-container');

faqData.map((item) => {

    let faqItem = document.createElement('article');
    faqItem.classList.add('faq-item');

    let markup = `
            <div class="item-question">
                <span class="question-text">${item.question}</span>
                <span class="arrows-container">
                    <span class="expand">▼</span>
                    <span class="close">▲</span>
                </span>
            </div>
            <div class="item-answer">
                <span>${item.answer}</span>
            </div>
    `;
    
    faqItem.innerHTML = markup;
    faqsContainer.append(faqItem);
});

const toggleButtons = document.querySelectorAll('.arrows-container');
    
toggleButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        const faqItem = e.currentTarget.parentElement.parentElement;
        faqItem.classList.toggle("show-answer");
    });
});