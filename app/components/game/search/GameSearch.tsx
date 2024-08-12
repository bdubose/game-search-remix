import { Form, useSubmit } from "@remix-run/react";



export const GameSearch = () => {
    const submit = useSubmit();
    return (
        <Form action="/" onChange={e => submit(e.currentTarget)}>
            <input className="dark:text-slate-800" type="text" name="search"/>
        </Form>
    )
}