import React from 'react'
import styles from './Search.module.scss'

const Search = ({searchValue, setSearchValue}) => {
    return <div className={styles.root}>
        <svg
            className={styles.icon}
            fill="#000000" width="800px" height="800px" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="m 9.409996,2.4414063 c -1.92114,-1.92163005 -5.047381,-1.92163005 -6.968813,0 -1.921577,1.9211399 -1.921577,5.0475299 0,6.96881 1.855519,1.8554897 4.834556,1.9186397 6.767084,0.19043 l 0.390671,0.39082 c -0.09728,0.2489997 -0.04628,0.5424197 0.154807,0.7435297 l 2.061471,2.06145 c 0.270991,0.27116 0.710564,0.27116 0.98141,0 0.271165,-0.27085 0.271165,-0.71031 0,-0.98159 L 10.735329,9.7538263 c -0.201262,-0.20141 -0.494797,-0.25238 -0.743827,-0.15496 l -0.39067,-0.39081 c 1.728528,-1.93241 1.6648,-4.91145 -0.190836,-6.76665 z m -6.379938,6.38008 c -1.596673,-1.59649 -1.596673,-4.19476 0,-5.7914401 1.596528,-1.59667 4.19471,-1.59667 5.791354,0 1.596674,1.59668 1.596674,4.1949201 0,5.7914401 -1.596644,1.5964997 -4.194826,1.5964997 -5.791354,0 z"/>
        </svg>
        <input
            value={searchValue}
            onChange={event => setSearchValue(event.target.value) }
            className={styles.input}
            placeholder="Поиск пиццы..."/>
        {searchValue && (
            <svg onClick={() => setSearchValue('')} className={styles.clearIcon}
                width="800px" height="800px" viewBox="0 -0.5 21 21" version="1.1" >
                <title>close [#1511]</title>
                <desc>Created with Sketch.</desc>
                <defs>
                </defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Dribbble-Light-Preview" transform="translate(-419.000000, -240.000000)" fill="#000000">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                        <polygon id="close-[#1511]" points="375.0183 90 384 98.554 382.48065 100 373.5 91.446 364.5183 100 363 98.554 371.98065 90 363 81.446 364.5183 80 373.5 88.554 382.48065 80 384 81.446">
                        </polygon>
                        </g>
                    </g>
                </g>
            </svg>
        )}


    </div>
};

export default Search;