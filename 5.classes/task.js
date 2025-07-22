class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100; // начальное состояние идеально
        this.type = null;
    }

    // геттер для чтения состояния
    get state() {
        return this._state;
    }

    // сеттер для изменения состояния
    set state(newState) {
        if (newState <= 0) { // нельзя ухудшить ниже нуля
            this._state = 0;
        } else if (newState >= 100) { // состояние не улучшается выше 100%
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    // восстановление испорченного издания
    fix() {
        this.state *= 1.5; // увеличение состояния на 50% от текущего
    }
}

// Журнал 
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

// Книга — расширение базового класса с указанием автора
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

// Специализированные типы книг
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel'; // роман
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic'; // фантастика
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective'; // детектив
    }
}

// ЗАДАНИЕ 2

class Library {
    constructor(name) {
        this.name = name;
        this.books = []; // Массив для хранения книг и журналов
    }

    // Добавляет книгу в коллекцию, если её состояние > 30
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    // Осуществляет поиск книги по указанному критерию
    findBookBy(type, value) {
        for (let book of this.books) {
            if (book[type] === value) {
                return book;
            }
        }
        return null;
    }

    // Выдает книгу по названию, удаляя её из коллекции
    giveBookByName(bookName) {
        const index = this.books.findIndex((book) => book.name === bookName);
        if (index !== -1) {
            return this.books.splice(index, 1)[0]; // Удаляем и возвращаем найденную книгу
        }
        return null;
    }
}