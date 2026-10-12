const customerId = 'CUS101';
const monthlyIncome = 40000;
const requestedLoanAmount = 300000;
const existingEMI = 8000;
const employmentType = 'Salaried';
const creditScore = 760;
const emiLimit = monthlyIncome * 0.50;
let loanEligibility;
let eligibilityCategory;
let remarks;
if (monthlyIncome <= 0 || requestedLoanAmount <= 0 || existingEMI < 0 || creditScore < 300 || creditScore > 900) {
    loanEligibility = 'Not Eligible';
    eligibilityCategory = 'Not Eligible';
    remarks = 'Invalid customer information provided';
} else if (existingEMI > emiLimit) {
    loanEligibility = 'Not Eligible';
    eligibilityCategory = 'Not Eligible';
    remarks = 'Existing EMI exceeds 50% of monthly income';
} else if (employmentType === 'Salaried' && creditScore >= 750 && monthlyIncome >= 30000) {
    loanEligibility = 'Eligible for Pre-Screening';
    eligibilityCategory = 'Standard';
    remarks = 'Customer meets standard loan eligibility criteria';
} else if (creditScore >= 650 && creditScore <= 749) {
    loanEligibility = 'Eligible for Pre-Screening';
    eligibilityCategory = 'Restricted';
    remarks = 'Customer may be considered under restricted category';
} else {
    loanEligibility = 'Not Eligible';
    eligibilityCategory = 'Not Eligible';
    remarks = 'Customer does not meet minimum eligibility requirements';
}
console.log("------ Banking Loan Eligibility Report ------");
console.log("Customer ID: ", customerId);
console.log("Employment Type: ", employmentType);
console.log("Monthly Income: Rs.", monthlyIncome);
console.log("Requested Loan Amount: Rs.", requestedLoanAmount);
console.log("Credit Score: ", creditScore);
console.log("Existing EMI: Rs.", existingEMI);
console.log("Permissible EMI Limit: Rs.", emiLimit);
console.log("Loan Eligibility: ", loanEligibility);
console.log("Eligibility Category: ", eligibilityCategory);
console.log("Remarks: ", remarks);
console.log("Note: This is a preliminary assessment only. Actual loan approval is not provided.");