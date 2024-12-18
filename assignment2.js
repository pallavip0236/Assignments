function registerUser(username, password) {
    return new Promise((resolve, reject) => {
        // checking if the username already exists ( in db)
        const existingUsers = ['nirma', 'khushboo', 'janani']; 

        if (!username || !password) {
            reject('Username and password are required.');
        } else if (existingUsers.includes(username)) {
            reject('Username already exists.');
        } else {
            // registration process (storing data)
            setTimeout(() => {
                resolve('Registration successful!');
            }, 2000); //  async operation (saving to a database)
        }
    });
}

// Usage
registerUser('nirma', 'password123')
    .then((message) => {
        console.log(message); // Username "nirma" already exists
    })
    .catch((error) => {
        console.error(error); // This will print the error message
    });

registerUser('newuser', 'password456')
    .then((message) => {
        console.log(message); // Registration successful!
    })
    .catch((error) => {
        console.error(error); // This will print the error message if failed
    });

registerUser('khushboo', 'mypassword')
    .then((message) => {
        console.log(message); // Username "khushboo" already exists
    })
    .catch((error) => {
        console.error(error); // This will print the error message
    });

