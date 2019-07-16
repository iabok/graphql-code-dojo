# Code dojo seesion (Graphlql)

## Set up

```
$ git clone git@github.com:iabok/graphql-code-dojo.git
$ cd graphql-code-dojo
$ npm install

Start server
$ node index.js
```

## Queries

```
List of Books:

{
  books {
    id
    title
  }
}

Output:
{
  "data": {
    "books": [
      {
        "id": "1",
        "title": "A GIRL'S GUIDE TO MOVING ON"
      },
      {
        "id": "2",
        "title": "Vājirāutam"
      },
      {
        "id": "3",
        "title": "Sāhitya bicāra o mūlyabodha"
      },
      {
        "id": "4",
        "title": "Bhānumatīra deśa."
      },
      {
        "id": "5",
        "title": "Kabitā."
      },
      {
        "id": "6",
        "title": "Kabitā, uneiśaha cuāttari."
      },
      {
        "id": "7",
        "title": "Kabitā-2003"
      },
      {
        "id": "8",
        "title": "Bājirāuta."
      },
      {
        "id": "9",
        "title": "Citragrība."
      },
      {
        "id": "10",
        "title": "Uttara-kaksha"
      }
    ]
  }
}

Create a new book:

mutation {
  addBook(book: { title: "High Energy", author: "Team Everyone" } ) {
    id,
    title
  }
}

Output:

{
  "data": {
    "addBook": {
      "id": "11",
      "title": "High Energy"
    }
  }
}

Update a book:

mutation {
  updateBook(id: "1", book: { title: "Insomnia", author: "The team" } ) {
    id,
    title,
    author
  }
}

Output:

{
  "data": {
    "updateBook": {
      "id": "1",
      "title": "Insomnia",
      "author": "The team"
    }
  }
}

Delete book:

mutation {
  deleteBook(id: "5") {
    id,
    title
  }
}
```