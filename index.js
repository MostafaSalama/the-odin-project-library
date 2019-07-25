document.addEventListener('DOMContentLoaded', () => {
	/*
        buttons
     */
	const addBookBtn = document.getElementById('add-book-btn');
    const BookListContainer = document.getElementById('books-container') ;

	function displayBookFields(b) {
		return function() {
			console.log('clicked');
			document.getElementById('fields').style.display = 'initial';
		};
	}

	addBookBtn.addEventListener('click', displayBookFields(true));
	const app = {
		library: ['good for the glory'],
        container:document.getElementById('books-container') ,
		render() {
		    // first clear the container
            this.clearUI() ;
			for (let book of this.library) {

			}
		},
        addBook(book){
		    this.library = [book,...this.library]
        },
        createBookDiv(book){
		    const div = document.createElement('div') ;
		    div.classList.add('book-card') ;

		    const pAuthor = document.createElement('p');
		    const pName = document.createElement('p');

		    const label = document.createElement('label') ;
		    const checkBox = document.createElement('input');
		    checkBox.setAttribute('type','checkbox') ;
		    checkBox.checked = book.isRead ;

		    pAuthor.classList.add('book-card-author');
		    pAuthor.innerHTML = `<span>Author: </span> ${book.author}` ;
		    pName.classList.add('book-card-name')
            pName.innerHTML = `<span>Name: </span> ${book.name}` ;

		    label.appendChild(checkBox);
		    label.append('Read') ;
		    return div ;
        },
        clearUI(){
		    this.container.innerHTML = '' ;
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
