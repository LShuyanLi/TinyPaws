// Displays the selected bed under the cat and handles bed color changes.
export default function CatDisplay({ selectedBed }) {
    {selectedBed === "yellow" && (
    <img src="/bed-1.svg" />
    )}

    {selectedBed === "green" && (
    <img src="/bed-2.png" />
    )}
}