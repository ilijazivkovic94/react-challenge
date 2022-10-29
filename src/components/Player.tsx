import { SONGS_LIST } from '../constants/Constant';
import { backwardsSvg, forwardsSvg, playSvg, stopSvg, volumeMediumSvg, volumeMuteSvg, volumeSmallSvg } from '../Icons';
import { useSettingContext } from '../contexts/SettingContext';

function Player() {
    const [context, setContext] = useSettingContext();

    const handleSound = (value: number) => {
        context.volume = value;
        setContext({...context});
    };

    const handlePlay = () => {
        context.isPlaying = !context.isPlaying;
        setContext({...context});
    };

    const handlePrevSong = () => {
        const currentIndex = SONGS_LIST.findIndex(item => item.title === context.currentSong);
        if (SONGS_LIST[currentIndex - 1]) {
            context.currentSong = SONGS_LIST[currentIndex - 1]?.title;
            setContext({ ...context });
        }
    };

    const handleNextSong = () => {
        const currentIndex = SONGS_LIST.findIndex(item => item.title === context.currentSong);
        if (SONGS_LIST[currentIndex + 1]) {
            context.currentSong = SONGS_LIST[currentIndex + 1]?.title;
            setContext({ ...context });
        }
    };

    return (
        <div className="player-container">
            <div className="control-btns">
                <div className="control-btn" onClick={handlePrevSong}>
                    {backwardsSvg}
                </div>
                <div className="control-btn" onClick={handlePlay}>
                    {context?.isPlaying ? stopSvg : playSvg}
                </div>
                <div className="control-btn" onClick={handleNextSong}>
                    {forwardsSvg}
                </div>
            </div>

            <div>
            <div className="slider">
                <div>
                    {context?.volume < 1 ? volumeMuteSvg : (context.volume < 70 ? volumeSmallSvg : volumeMediumSvg)}
                </div>
                <input type="range" min="0" max="100" value={context?.volume || 0} onInput={(evt: any) => handleSound(evt?.target?.value)} />
            </div>
            </div>
        </div>
    )
}

export default Player;