import React, { useState } from 'react';

function UserProfile() {
    const [aboutMe, setAboutMe] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    const handleTextChange = (event) => {
        setAboutMe(event.target.value);
    };

    const saveDraft = () => {
        setStatusMessage(`Draft saved on ${new Date().toLocaleString()}`);
    };

    const submitText = () => {
        setStatusMessage(`About Me submitted on ${new Date().toLocaleString()}`);
    };

    return (
        <div className="user-profile">
            <h2>Your Profile</h2>
            <textarea
                value={aboutMe}
                onChange={handleTextChange}
                placeholder="Describe yourself here..."
            />
            <button className="save-draft" onClick={saveDraft}>Save as Draft</button>
            <button className="submit" onClick={submitText}>Submit</button>
            {statusMessage && <p>{statusMessage}</p>}
        </div>
    );
}

export default UserProfile;
