document.addEventListener('DOMContentLoaded', () => {
	/*
        buttons
     */
	const addBookBtn = document.getElementById('add-book-btn');

	function displayBookFields(b) {
		return function() {
			console.log('clicked');
			document.getElementById('fields').style.display = 'initial';
		};
	}

	addBookBtn.addEventListener('click', displayBookFields(true));
	const app = {
		library: ['good for the glory'],
		render() {
			for (let book of this.library) {
			}
		},
        addBook(book){
		    this.library.push(book)
        }
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
