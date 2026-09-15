# AutoPlan

<p align="center">
  <img src="assets/img/logo.svg" alt="AutoPlan Logo" width="96">
</p>

<h3 align="center">AutoPlan — Know your installment before you buy.</h3>
<p align="center">اعرف قسطك قبل ما تشتري.</p>

## About

AutoPlan is a car installments calculator web UI built for the DEPI assignment.
The user enters the car details and instantly sees the estimated monthly
installment and interest rate.

> The page currently shows static demo values — calculations will be handled
> once the backend is connected.

## Tech Stack

- HTML5
- CSS3
- Bootstrap 5 (CSS + JS bundle)
- Bootstrap Icons

## Calculator Inputs & Outputs

| Field | Type | Label |
| --------------- | ------ | ---------------------- |
| Car type        | Input  | نوع السيارة            |
| Car model       | Input  | موديل السيارة          |
| Car price       | Input  | سعر السيارة            |
| Down payment    | Input  | قيمة المقدم            |
| Installment period | Input | مدة التقسيط          |
| Monthly installment | Output | القسط الشهري        |
| Interest rate   | Output | نسبة الفائدة           |

> `index.html` simply redirects to the calculator.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/ehabmahmoudramadan-crypto/autoplan-car-calculator.git
   ```
2. Open `calculator.html` in your browser, or run it with Live Server.

No build step and no dependencies — everything is loaded from CDN.

## Project Structure

```
autoplan/
├── index.html             # redirect → calculator
├── calculator.html
├── assets/
│   ├── css/style.css
│   └── img/logo.svg
```

## Roadmap

- Connect a real backend/API to perform live calculations
- Save and compare previous calculations
- Bank offers integration

## Author

**Ehab Mahmoud Ramadan** — DEPI Web Development Track
