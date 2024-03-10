const calculate = (num1, num2, operation) => {
    switch (operation) {
        case 'add':
            return parseFloat(num1) + parseFloat(num2);
        case 'subtract':
            return parseFloat(num1) - parseFloat(num2);
        default:
            return 0;
    }
};

const add = (req, res) => {
    const { num1 = 0, num2 = 0 } = req.body;
    const result = calculate(num1, num2, 'add');
    res.json({ result });
};

const subtract = (req, res) => {
    const { num1 = 0, num2 = 0 } = req.body;
    const result = calculate(num1, num2, 'subtract');
    res.json({ result });
};

module.exports = { add, subtract };