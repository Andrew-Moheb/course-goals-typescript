import { type ReactNode } from "react"

// type is here 
type CourseGoalProps = { id: number, title: string, onDelete: (id: number) => void, children: ReactNode }

export default function CourseGoal({ id, title, onDelete, children }: CourseGoalProps) {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </article>
    )
}



