import React, {useEffect, useRef, useState} from "react";
import {RouteComponentProps} from "react-router-dom";
import {page} from "../utils/wiki";

type Section = {
    title: string,
    content: string
}

const Article = (props: RouteComponentProps<any>) => {
    const [sections, setSections] = useState<Section[]>([])

    const divRef = useRef<HTMLDivElement | null>(null);

    function reset(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.key === 'Backspace')
            props.history.push('/')
    }

    useEffect(() => {
        console.log("fx")
        page(props.match.params.term)
            .then<Section[] | string>(page => page.content())
            .then(value => setSections(value as Section[]))
            .then(() => divRef.current?.focus())

    }, [props.match.params.term])

    return (
        <div ref={divRef}
             tabIndex={0}
             onKeyUp={(event) => reset(event)}>
            {sections.map((value, index) => {
                return (
                    <div key={index}>
                        <h5 tabIndex={0}>{value.title}</h5>
                        <p tabIndex={0}>{value.content}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Article;