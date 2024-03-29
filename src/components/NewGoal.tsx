import { useRef, type FormEvent } from "react";

type NewGoalProp = {
    addGoal: (goal: string, summary: string) => void
}

export default function NewGoal({ addGoal }: NewGoalProp) {
    const goal = useRef<HTMLInputElement>(null)
    const summary = useRef<HTMLInputElement>(null)
    function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const enteredGoal = goal.current!.value
        const enteredSummary = summary.current!.value
        event.currentTarget.reset()
        addGoal(enteredGoal, enteredSummary)
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <p>
                <label htmlFor="goal">Your Goal</label>
                <input id="goal" type="text" ref={goal} />
            </p>
            <p>
                <label htmlFor="summary">Summary</label>
                <input id="summary" type="text" ref={summary} />
            </p>
            <button>Add Goal</button>
        </form>
    )
}
