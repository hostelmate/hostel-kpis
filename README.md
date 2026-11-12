# Hostel KPIs: formulas for the numbers that run a hostel

The metrics hostel owners and managers use to price beds, read performance and plan costs, each with its formula,
a worked example and a free calculator. Written by [HostelMate](https://hostelmate.co/), hostel management software
built around the bed: the unit of a hostel is the bed, not the room, so every metric here counts beds.

`index.js` has the same formulas as plain JavaScript functions, free to use (MIT).

| Metric | Formula | Calculator |
|---|---|---|
| [Occupancy rate](#occupancy-rate) | `(Occupied Beds ÷ Total Available Beds) × 100` | [Hostel Occupancy Rate Calculator](https://hostelmate.co/tools/hostel-occupancy-rate-calculator) |
| [Bed ADR (average daily rate per bed)](#bed-adr-average-daily-rate-per-bed) | `Bed ADR = Total Bed Revenue ÷ Total Number of Beds Sold` | [Bed ADR Calculator](https://hostelmate.co/tools/bed-adr-calculator) |
| [RevPAB (revenue per available bed)](#revpab-revenue-per-available-bed) | `RevPAB = Total Bed Revenue ÷ Total Available Beds` | [RevPAB Calculator](https://hostelmate.co/tools/revpab-calculator) |
| [TRevPAB (total revenue per available bed)](#trevpab-total-revenue-per-available-bed) | `TRevPAB = Total Hostel Revenue (Beds + Extras) ÷ Total Available Beds` | [TRevPAB Calculator](https://hostelmate.co/tools/trevpab-calculator) |
| [ALOS (average length of stay)](#alos-average-length-of-stay) | `ALOS = Total Occupied Bed-Nights ÷ Total Number of Bookings` | [Average Length of Stay (ALOS) Calculator](https://hostelmate.co/tools/alos-calculator) |
| [CPOB (cost per occupied bed)](#cpob-cost-per-occupied-bed) | `CPOB = Total Operating Costs ÷ Total Occupied Beds` | [Cost Per Occupied Bed (CPOB) Calculator](https://hostelmate.co/tools/cpob-calculator) |
| [Break-even beds](#break-even-beds) | `Break-Even Beds = Total Fixed Costs ÷ (Bed ADR − Variable Cost Per Bed)` | [Hostel Break-Even Calculator](https://hostelmate.co/tools/hostel-break-even-calculator) |
| [OTA commission and net revenue](#ota-commission-and-net-revenue) | `Net Revenue = Gross Revenue − (Gross Revenue × Commission %)` | [OTA Commission & Net ADR Calculator](https://hostelmate.co/tools/ota-commission-calculator) |
| [Linen PAR](#linen-par) | `Linen Required = (Total Beds × Linen Sets Per Bed) × Target PAR Level` | [Linen PAR Calculator](https://hostelmate.co/tools/linen-par-calculator) |

## Occupancy rate

**Formula:** `(Occupied Beds ÷ Total Available Beds) × 100`

The math itself is the easy part: take the number of beds that had a guest in them last night, divide by the number of beds you actually had available to sell, and multiply by 100. Fifty occupied out of eighty available is 62.5%. The part worth slowing down on is the second number, what counts as "available", because that's where most occupancy figures quietly go wrong.

**Where does your number sit?** (Rough bands, not gospel, local market and season move these a lot)

- Below 50%: Something's off
- 50–70%: Middle of the pack
- 70–85%: Healthy
- 85%+: Running hot

Calculate it: [Hostel Occupancy Rate Calculator](https://hostelmate.co/tools/hostel-occupancy-rate-calculator) · in code: `occupancyRate()`

## Bed ADR (average daily rate per bed)

**Formula:** `Bed ADR = Total Bed Revenue ÷ Total Number of Beds Sold`

ADR, average daily rate, is just the average price a sold bed went for. Total bed revenue divided by the number of bed-nights you sold. If you took $5,000 across 200 bed-nights, your ADR is $25.

Calculate it: [Bed ADR Calculator](https://hostelmate.co/tools/bed-adr-calculator) · in code: `bedAdr()`

## RevPAB (revenue per available bed)

**Formula:** `RevPAB = Total Bed Revenue ÷ Total Available Beds`

RevPAB takes all your bed revenue and divides it by every bed you had available to sell, sold or not. That last part is what makes it powerful. Because empty beds stay in the denominator, you can't flatter the number by cherry-picking your sold beds.

Calculate it: [RevPAB Calculator](https://hostelmate.co/tools/revpab-calculator) · in code: `revpab()`

## TRevPAB (total revenue per available bed)

**Formula:** `TRevPAB = Total Hostel Revenue (Beds + Extras) ÷ Total Available Beds`

RevPAB only counts the beds. TRevPAB counts everything, the bar, the walking tours, the pub crawl commission, the breakfast add-ons, the laundry, the lockers, the airport pickup. You take your full revenue for a period, including all of that, and divide by your available beds.

Calculate it: [TRevPAB Calculator](https://hostelmate.co/tools/trevpab-calculator) · in code: `trevpab()`

## ALOS (average length of stay)

**Formula:** `ALOS = Total Occupied Bed-Nights ÷ Total Number of Bookings`

Add up every bed-night you sold over a period, divide by the number of bookings that produced them, and you've got your ALOS. Four hundred and fifty bed-nights across a hundred and fifty bookings is an average of three nights. It's a simple number, but it quietly drives a lot of your costs, and unlike occupancy, it doesn't move much from day to day, so you only need to look at it occasionally to learn something.

**What your ALOS might be telling you** (Totally normal ranges depend on what kind of hostel you run, a transit stopover and a beach hostel live in different worlds)

- 1–2 nights: Transit / stopover crowd
- 2–4 nights: Classic backpacker
- 4–7 nights: Sticking around
- 7+ nights: Long-termers / digital nomads

Calculate it: [Average Length of Stay (ALOS) Calculator](https://hostelmate.co/tools/alos-calculator) · in code: `alos()`

## CPOB (cost per occupied bed)

**Formula:** `CPOB = Total Operating Costs ÷ Total Occupied Beds`

RevPAB tells you what you earn per bed; CPOB tells you what it costs to fill one. Take everything it took to run the hostel over a period and divide it by the number of bed-nights you actually sold, and you get the cost of hosting one guest for one night. Set that figure next to your rate and you stop guessing about margins, you can see whether each bed is making money or quietly losing it.

Calculate it: [Cost Per Occupied Bed (CPOB) Calculator](https://hostelmate.co/tools/cpob-calculator) · in code: `cpob()`

## Break-even beds

**Formula:** `Break-Even Beds = Total Fixed Costs ÷ (Bed ADR − Variable Cost Per Bed)`

Your break-even is the number of beds you have to sell before the hostel stops losing money and starts making it. The maths works by taking your fixed costs, the ones that don't budge whether you're empty or full, and dividing them by what each sold bed actually contributes after its own variable costs. Everything below that line is just covering the bills; everything above it is profit.

Calculate it: [Hostel Break-Even Calculator](https://hostelmate.co/tools/hostel-break-even-calculator) · in code: `breakEvenBeds()`

## OTA commission and net revenue

**Formula:** `Net Revenue = Gross Revenue − (Gross Revenue × Commission %)`

OTAs quote you a headline commission rate, and it's easy to mentally file it as a small cost of doing business. This calculator exists to make that cost concrete on a per-booking basis, because the number that matters isn't the percentage, it's the dollars that don't reach your account. Put in the gross value and the rate, and you get both the commission paid and what you walk away with.

**Rough commission ranges** (Indicative only, your actual rate depends on your contract, market, and any promo programs you've opted into. Always calculate with your real number)

- ~15%+
- ~10–15%
- higher
- 0%

Calculate it: [OTA Commission & Net ADR Calculator](https://hostelmate.co/tools/ota-commission-calculator) · in code: `otaNetRevenue()`

## Linen PAR

**Formula:** `Linen Required = (Total Beds × Linen Sets Per Bed) × Target PAR Level`

PAR is the hospitality shorthand for how many full sets of an item you keep in circulation so operations never stall. A PAR level of 3 means three sets per bed in the loop at any given time: one on the bed, one going through the wash, and one clean and waiting. Multiply your bed count by the sets each bed needs, then by your PAR level, and you get the total stock to own.

**Common PAR levels** (Guidelines, not rules, your laundry turnaround and occupancy decide where you actually need to sit)

- PAR 2: Bare minimum,  risky if laundry slips
- PAR 3: The usual baseline
- PAR 4: Safer for high occupancy or slow laundry

Calculate it: [Linen PAR Calculator](https://hostelmate.co/tools/linen-par-calculator) · in code: `linenRequired()`

## Using index.js

```js
import { occupancyRate, revpab, breakEvenBeds } from "./index.js";

occupancyRate(50, 80);        // 62.5
revpab(5000, 400);            // 12.5
breakEvenBeds(30000, 25, 7);  // 1666.67 bed-nights
```

## About HostelMate

[HostelMate](https://hostelmate.co/) is hostel management software: a
[property management system](https://hostelmate.co/pages/about/hostel-management-system), a
[channel manager](https://hostelmate.co/features/channel-manager) and a commission-free
[booking engine](https://hostelmate.co/features/hostel-booking-engine-calendar) in one product, priced per
property. All nine calculators are free at [hostelmate.co/tools](https://hostelmate.co/tools).

Corrections and new metrics are welcome as issues or pull requests.
