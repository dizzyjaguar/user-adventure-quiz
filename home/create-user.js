function makeUser(formData) {
    const user = {
        name: formData.get('username'),
        character: formData.get('player'),
        confidence: 50,
        creativeness: 50,
        completed: {}
    };

    return user;
}

export default makeUser;