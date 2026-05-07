import { useEffect, useState } from "react";
import { ChapterCover } from "../ChapterCover/ChapterCover";
import { ChapterDetail } from "../ChapterDetail/ChapterDetail";
import { ChapterItem } from "../ChapterItem/ChapterItem";
import { UseApplication } from "../../Components/Provider/Provider";
import { useParams } from "react-router";

export const Chapter = () => {

    const { id } = useParams();

    const { chapters, currentChapter, setCurrentChapter } = UseApplication();

    const [cover, setCover] = useState(true);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        const chapter = id;
        
        if (chapter) {
            setCover(true);
            setModal(false);
        }
    }, [id])

    return (
        cover ?
            <ChapterCover setCover={setCover} />
            :
            modal ?
                <ChapterDetail setModal={setModal} />
                :
                <ChapterItem setModal={setModal} />
    )
}