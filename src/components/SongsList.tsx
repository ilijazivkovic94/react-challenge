import { SONGS_LIST } from '../constants/Constant';
import { downloadSvg } from '../Icons';
import { useSettingContext } from '../contexts/SettingContext';

function SongsList() {
    const [context, setContext] = useSettingContext();

    const selectSong = (song_title: string) => {
        context.currentSong = song_title;
        setContext({...context});
    }

    return (
        <div className="songs-container">
            <div className="row header">
                <div style={{ display: "flex", flex: 1 }}>#</div>
                <div style={{ display: "flex", flex: 3 }}>Title</div>
                <div style={{ display: "flex", flex: 2 }}>Author</div>
                <div style={{ display: "flex", flex: 1 }}>#</div>
            </div>
            <div>
                {SONGS_LIST.map((item, index) => (
                    <div className={"row song" + (context.currentSong === item.title ? " active" : "")} key={index} onClick={() => selectSong(item.title)}>
                        <div style={{ display: "flex", flex: 1 }}>{index + 1}</div>
                        <div style={{ display: "flex", flex: 3 }}>{item.title}</div>
                        <div style={{ display: "flex", flex: 2 }}>{item.author}</div>
                        <div style={{ display: "flex", flex: 1 }}>
                            {downloadSvg}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SongsList;