import React, {ChangeEvent, FC, memo} from 'react';

interface ITranslations {
    input: string
    inputHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea: FC<ITranslations> = ({input, inputHandler}) => {
    return (
        <textarea
            placeholder="Начните писать текст"
            id="textarea"
            value={input}
            onChange={inputHandler}
            className="translator__textarea"
            tabIndex={1}
            autoCorrect="off"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck="false"
            disabled={false}
        />
    );
};

export default memo(TextArea);
