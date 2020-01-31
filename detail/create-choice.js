function createChoice(choice) {
    const label = document.createElement('label');
    
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'choice';
    radio.required = true;
    radio.value = choice.id;
    label.appendChild(radio);

    const details = document.createElement('span');
    details.textContent = choice.details;
    label.appendChild(details);

    return label;
}

export default createChoice;