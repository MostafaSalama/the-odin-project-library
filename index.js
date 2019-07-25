document.addEventListener('DOMContentLoaded', () => {
	/*
        buttons
     */
	const addBookBtn = document.getElementById('add-book-btn');
	const submitBookBtn = document.getElementById('submit-book-btn');

	function displayBookFields(b) {
		return function() {
			console.log('clicked');
			document.getElementById('fields').style.display = 'initial';
		};
	}

	addBookBtn.addEventListener('click', displayBookFields(true));

	function addNewBook() {
		const bookName = document.getElementById('book-name-input').value;
		const bookAuthor = document.getElementById('book-author-input').value;
		const bookPages = document.getElementById('book-pages-input').value;
		const isRead = document.getElementById('book-read-statue-input').checked;
		const book = new Book(bookName, bookAuthor, bookPages, isRead);
		app.addBook(book);
		console.log(app.library)
		app.render();
	}

	submitBookBtn.addEventListener('click', addNewBook);
	const app = {
		library: [new Book('The fifth Boy', 'Me', '320', true)],
		container: document.getElementById('books-container'),
		render() {
			// first clear the container
			this.clearUI();
			for (let book of this.library) {
				if (book.isCompeleteBook()) {
					const bookDiv = this.createBookDiv(book);
					this.container.prepend(bookDiv);
				}
			}
		},
		addBook(book) {
			this.library = [book, ...this.library];
		},
		createBookDiv(book) {
			const div = document.createElement('div');
			div.classList.add('book-card');

			const pAuthor = document.createElement('p');
			const pName = document.createElement('p');
            const pPages = document.createElement('p') ;
			const label = document.createElement('label');
			const checkBox = document.createElement('input');
			checkBox.setAttribute('type', 'checkbox');
			checkBox.checked = book.isRead;

			pAuthor.classList.add('book-card-author');
			pAuthor.innerHTML = `<span>Author: </span> ${book.author}`;
			pName.classList.add('book-card-name');
			pName.innerHTML = `<span>Name: </span> ${book.name}`;
			pPages.classList.add('book-card-pages') ;
            pPages.innerHTML = `<span>Pages: </span> ${book.pages}` ;
			label.appendChild(checkBox);
			label.append('Read');

			div.appendChild(pName)
			div.appendChild(pAuthor)
			div.appendChild(label)
			return div;
		},
		clearUI() {
			this.container.innerHTML = '';
		},
	};

	function Book(name, author, pages, isRead = false) {
		this.name = name;
		this.author = author;
		this.pages = pages;
		this.isRead = isRead;
	}

	/**
	 * update the read status of the book
	 * @param isRead {boolean}
	 *
	 */
	Book.prototype.updateReadStatue = function(isRead) {
		this.isRead = isRead;
	};
	/**
	 * check if all the book attributes exist
	 * @returns {Boolean}
	 */
	Book.prototype.isCompeleteBook = function() {
		return this.name && this.author && this.pages;
	};
});
