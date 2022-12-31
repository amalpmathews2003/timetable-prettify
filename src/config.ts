export const timeSlots = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5].map((hour, index) => {
  return {
    time: `${hour}:00`,
    value: index + 1
  }
})
export const timeTable1 = {
  "MON": [
    "F", "A1", "B1", "C1", "D1+", "L", "P1", "P1", "P1", "G",
  ],
  "TUE": [
    "H", "B1", "C1", "D1", "E1+", "L", "Q1", "Q1", "Q1", "F"
  ],
  "WED": [
    "G", "C1", "D1", "E1", "A1+", "L", "R1", "R1", "R1", "H"
  ],
  "THU": [
    "F", "D1", "E1", "A1", "B1+", "L", "S1", "S1", "S1", "G"
  ],
  "FRI": [
    "H", "E1", "A1", "B1", "C1+", "L", "T1", "T1", "T1", "F+"
  ]
}
export const timeTable2 = {
  "MON": [
   "F","P2","P2","P2","L","D2+","A2","B2","C2","G",
  ],
  "TUE": [
    "H", "Q2", "Q2", "Q2", "L", "E2+", "B2", "C2", "D2", "F"
  ],
  "WED": [
    "G", "R2", "R2", "R2", "L", "A2+", "C2", "D2", "E2", "H"
  ],
  "THU": [
    "F", "S2", "S2", "S2", "L", "B2+", "D2", "E2", "A2", "G"
  ],
  "FRI": [
    "H", "T2", "T2", "T2", "L", "C2+", "E2", "A2", "B2", "F+"
  ]
}