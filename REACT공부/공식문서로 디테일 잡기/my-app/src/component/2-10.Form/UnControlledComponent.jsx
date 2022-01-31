import React, { useRef } from 'react'

export default function UnControlledComponent() {

    const fileInputRef = useRef(null);

    function handleSubmit(event) {
        event.preventDefault();
        alert(
            `Selected file - ${fileInputRef.current.files[0].name}`
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                UnControlledComponents Example
            </div>
            <br />
            <label>
                Upload file:
                <input type="file" ref={fileInputRef} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}

//React는 value값이 무엇인지 알지 못한다.