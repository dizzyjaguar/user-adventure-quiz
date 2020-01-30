function createQuestLink(quest) {
    const link = document.createElement('a');
    link.classList.add('quest');

    link.href = '../quest/?id=' + quest.id;

    link.textContent = quest.title;

    return link;

}

export default createQuestLink;