function calculateTax(basicSalary) {
    const taxBrackets = [
        { min: 0, max: 24587, rate: 0.1 },
        { min: 24588, max: 36278, rate: 0.15 },
        { min: 36279, max: 47869, rate: 0.2 },
        { min: 47870, max: 59460, rate: 0.25 },
        { min: 59461, max: Infinity, rate: 0.3 }
    ];

    let tax = 0;
    for (const bracket of taxBrackets) {
        if (basicSalary > bracket.min) {
            const taxableIncomeInBracket = Math.min(basicSalary, bracket.max) - bracket.min;
            tax += taxableIncomeInBracket * bracket.rate;
        }
    }
    return tax;
}

function calculateNHIF(basicSalary) {
    const nhifBrackets = [
        { min: 0, max: 5999, amount: 150 },
        { min: 6000, max: 7999, amount: 300 },
        // Add more brackets here as per the provided link
    ];

    for (const bracket of nhifBrackets) {
        if (basicSalary >= bracket.min && basicSalary <= bracket.max) {
            return bracket.amount;
        }
    }
}

function calculateNSSF(basicSalary) {
    const nssfRate = 0.06;
    const nssfDeduction = Math.min(basicSalary * nssfRate, 6000);
    return nssfDeduction;
}

function calculateNetSalary(basicSalary, benefits) {
    const tax = calculateTax(basicSalary);
    const nhif = calculateNHIF(basicSalary);
    const nssf = calculateNSSF(basicSalary);
    const grossSalary = basicSalary + benefits;
    const deductions = tax + nhif + nssf;
    const netSalary = grossSalary - deductions;
    return netSalary;
}

function main() {
    const basicSalary = parseFloat(prompt("Enter basic salary:"));
    const benefits = parseFloat(prompt("Enter benefits:"));
    const netSalary = calculateNetSalary(basicSalary, benefits);
    console.log("Net Salary:", netSalary);
}

main();
