'use client'
import { useState, useEffect } from 'react'

const words = [
    "Passionné",
    "Créatif",
    "Curieux",
    "Optimiste",
    "Rigoureux",
    "Méticuleux",
    "Polyvalent",
    "Ingénieux",
    "Minutieux",
    "Réactif",
    "Stratégique",
    "Efficace",
    "Inspiré",
    "Motivé",
    "Enthousiaste"
]

const TYPING_SPEED = 100
const DELETING_SPEED = 75
const WORD_DELAY = 2000

export const TypeWriter = () => {
    const [index, setIndex] = useState(0)
    const [subIndex, setSubIndex] = useState(0)
    const [reverse, setReverse] = useState(false)
    const [blink, setBlink] = useState(true)
    const [delay, setDelay] = useState(false)

    // Blink effect
    useEffect(() => {
        const timeout = setTimeout(() => {
            setBlink((prev) => !prev)
        }, 500)
        return () => clearTimeout(timeout)
    }, [blink])

    // Typing effect
    useEffect(() => {
        if (subIndex === words[index].length && !reverse && !delay) {
            setDelay(true)
            return
        }

        if (delay) {
            const timeout = setTimeout(() => {
                setDelay(false)
                setReverse(true)
            }, WORD_DELAY)
            return () => clearTimeout(timeout)
        }

        if (subIndex === 0 && reverse) {
            setReverse(false)
            setIndex((prev) => (prev + 1) % words.length)
            return
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1))
        }, reverse ? DELETING_SPEED : TYPING_SPEED)

        return () => clearTimeout(timeout)
    }, [subIndex, index, reverse, delay])

    return (
        <span className="text-[#ffcc4d] inline-block min-w-[120px]">
            {words[index].substring(0, subIndex) || ' '}
        </span>
    )
}
