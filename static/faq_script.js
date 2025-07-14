const faqData = [
    {
        question: "What is Svelte?",
        answer: "Svelte is a modern JavaScript framework for building user interfaces."
    },
    {
        question: "How do I get started with Svelte?",
        answer: "You can get started with Svelte by visiting the official documentation at svelte.dev."
    },
    {
        question: "What are the benefits of using Svelte?",
        answer: "Svelte offers a simple and intuitive API, excellent performance, and a great developer experience."
    }
];

const faqContainer = document.getElementById('faqs');
faqData.map(function(item){
    let article = document.createElement('article');
    article.className = 'faq-item mb-4 p-4 bg-gray-800 rounded-lg';
    const markup = `
    <div class="">
       <span class="text-lg font-semibold text-white">${item.question}</span>
       <span class="arrow">
            <span>△</span>
            <span>▽</span>
       </span>
    </div>
    <div class="answer hidden mt-2 text-gray-300">
        ${item.answer}
    </div>
`;

    article.innerHTML = markup;
    faqContainer.appendChild(article);
});