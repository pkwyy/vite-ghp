import { useState, useEffect } from "react"

const useInView = (options) => {
  const [ref, setRef] = useState(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
      },
      { ...options }
    )

    observer.observe(ref)

    return () => {
      observer.unobserve(ref)
    }
  }, [ref, options])

  return [setRef, inView]
}

export default useInView
