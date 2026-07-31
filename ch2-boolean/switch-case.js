const day = 'Saturday';

// Implicitly day ===
switch (day) {
    case 'Saturday':
        console.log('Weekend - 1');
        break;
    case 'Sunday':
        console.log('Weekend -2');
        break;
    default:
        console.log('Weekday');
        break;
}

// Fallthrough
switch (day) {
    case 'Saturday':
    case 'Sunday':
        console.log('Weekend');
        break;
    default:
        console.log('Weekday');
        break;
}