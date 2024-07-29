export interface student {
    id: number
    firstName: string
    lastName: string
    rollNo: number
    isOnsiteAllowed: boolean
    entryTest: entryTest
}

export interface entryTest {
    isPassed: boolean
    obtainMarks: number
    totalMarks: number
};