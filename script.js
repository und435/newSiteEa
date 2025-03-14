document.getElementById('add-review-btn').addEventListener('click', function() {
    let reviewText = prompt('Введіть ваш відгук:');
    if (reviewText) {
        addReview(reviewText);
        saveReview(reviewText);
    }
});

// Функція додавання відгуку
function addReview(text) {
    let reviewsContainer = document.getElementById('reviews');
    let reviewDiv = document.createElement('div');
    reviewDiv.classList.add('review');

    let reviewText = document.createElement('span');
    reviewText.textContent = text;

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = '×';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        deleteReview(reviewDiv, text);
    });

    reviewDiv.appendChild(reviewText);
    reviewDiv.appendChild(deleteBtn);
    reviewsContainer.appendChild(reviewDiv);
}

// Функція збереження відгуку в localStorage
function saveReview(text) {
    let savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    savedReviews.push(text);
    localStorage.setItem('reviews', JSON.stringify(savedReviews));
}

// Завантаження збережених відгуків
window.onload = function() {
    let savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    savedReviews.forEach(review => addReview(review));
};

// Функція видалення відгуку
function deleteReview(reviewElement, text) {
    reviewElement.classList.add('fade-out');
    setTimeout(() => {
        reviewElement.remove();
        let savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
        savedReviews = savedReviews.filter(review => review !== text);
        localStorage.setItem('reviews', JSON.stringify(savedReviews));
    }, 300);
}
