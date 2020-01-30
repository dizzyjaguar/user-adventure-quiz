function makeUser(formData) {
    const user = {
        name: formData.get('username'),
        character: formData.get('character-choices'),
        confidence: 50,
        creativeness: 50,
        completed: {}
    };

    return user;
}

export default makeUser;