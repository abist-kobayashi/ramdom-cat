import {useEffect, useState} from "react";

interface SearchCatImage {
    id: string;
    url: string;
    width: number;
    height: number;
}

type SerachCatImageResponse = SearchCatImage[];

const catImages: string[] = [
    "https://cdn2.thecatapi.com/images/bpc.jpg",
    "https://cdn2.thecatapi.com/images/eac.jpg",
    "https://cdn2.thecatapi.com/images/6qi.jpg",
  ];

const randomCatImage = (): string => {
    const index = Math.floor(Math.random() * catImages.length);
    return catImages[index];
}

const fetchCatImage = async (): Promise<SearchCatImage> => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const result = (await res.json()) as SerachCatImageResponse;
    return result[0];
}

const IndexPage = () => {
    const [catImageUrl, setCatImageUrl] = useState(
        "https://cdn2.thecatapi.com/images/bpc.jpg"
      );

    const handleClick = async () => {
        const image = await fetchCatImage();
        setCatImageUrl(image.url);
    }

    return (
        <div>
            <button onClick={handleClick}>きょうのにゃんこ🐈</button>
            <div style={{ marginTop: 8}}>
                <img src={catImageUrl} />
            </div>
        </div>
    );
};

export default IndexPage;
