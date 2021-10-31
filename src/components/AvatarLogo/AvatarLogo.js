import React from 'react';
import AvatarGroup from 'react-avatar-group';

const AvatarLogo = () => {
    return (
        <AvatarGroup
            avatars={["T", "R", "A", "V", "E", "L", "L", "I", "C", "A"]}
            initialCharacters={1}
            max={10}
            size={60}
            displayAllOnHover
            shadow={2}
        />
    );
};

export default AvatarLogo;