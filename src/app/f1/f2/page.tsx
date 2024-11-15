import Link from "next/link";

export default function F2() {
    return (
        <div>
            <div>This is F2 page.</div>
            <Link href="/f1">Link to F1</Link>
            <Link href="/f1/f3">Link to F3</Link>
        </div>
    )
}
