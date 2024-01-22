import {
  createContext,
  useContext,
  useState
} from "react";

/**
 * Represents the properties of a place.
 */
interface PlaceProps {
  id: number;
  name: string;
  description: string;
  imageId: string;
}

/**
 * Represents the properties of an image, including the associated place and imageSize.
 */
interface ImageProps {
  place?: PlaceProps;
  imageSize?: number;
}

/**
 * Represents the properties of the ImageSizeContext.
 */
interface ImageSizeContextProps {
  imageSize: number;
  setIsLarge: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context for imageSize and setIsLarge.
const ImageSizeContext = createContext<ImageSizeContextProps | undefined>(
  undefined
);

/**
 * Returns the image URL based on the given place.
 * @param place - The place to generate the image URL for.
 * @returns The generated image URL.
 */
const getImageUrl = (place: PlaceProps) => {
  return "https://i.imgur.com/" + place.imageId + "l.jpg";
};

/**
 * Component representing the ImageList.
 */
export const ImageList = () => {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLarge(e.target.checked);
  };

  return (
    <ImageSizeContext.Provider value={{ imageSize, setIsLarge }}>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={handleChange}
        />
        Use large images
      </label>
      <hr />
      <ListPlace imageSize={imageSize} />
    </ImageSizeContext.Provider>
  );
};

/**
 * Component representing the list of places.
 * @param imageSize - The size of the images to be displayed.
 */
const ListPlace = ({ imageSize }: ImageProps) => {
  const listItem = places.map((place) => (
    <li key={place.id}>
      <Place place={place} imageSize={imageSize} />
    </li>
  ));

  return <ul>{listItem}</ul>;
};

/**
 * Component representing a single place.
 * @param place - The place to be displayed.
 * @param imageSize - The size of the image for the place.
 */
const Place = ({
  place,
  imageSize
}: ImageProps) => {
  return (
    <>
      <PlaceImage place={place} imageSize={imageSize} />
      <p>
        <b>{place.name}</b>
        {": " + place.description}
      </p>
    </>
  );
};

/**
 * Component representing the image for a place.
 * @param place - The place for which the image is displayed.
 * @param imageSize - The size of the image.
 */
const PlaceImage = ({
  place,
  imageSize
}: ImageProps) => {
  const contextData = useContext(ImageSizeContext);
  const size = contextData?.imageSize || imageSize;

  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={size}
      height={size}
    />
  );
};

// Sample data for places.
const places: PlaceProps[] = [
  {
    id: 0,
    name: "Bo-Kaap in Cape Town, South Africa",
    description:
      "The tradition of choosing bright colors for houses began in the late 20th century.",
    imageId: "K9HVAGH",
  },
  {
    id: 1,
    name: "Rainbow Village in Taichung, Taiwan",
    description:
      "To save the houses from demolition, Huang Yung-Fu, a local resident, painted all 1,200 of them in 1924.",
    imageId: "9EAYZrt",
  },
  {
    id: 2,
    name: "Macromural de Pachuca, Mexico",
    description:
      "One of the largest murals in the world covering homes in a hillside neighborhood.",
    imageId: "DgXHVwu",
  },
  {
    id: 3,
    name: "Selarón Staircase in Rio de Janeiro, Brazil",
    description:
      'This landmark was created by Jorge Selarón, a Chilean-born artist, as a "tribute to the Brazilian people."',
    imageId: "aeO3rpI",
  },
  {
    id: 4,
    name: "Burano, Italy",
    description:
      "The houses are painted following a specific color system dating back to 16th century.",
    imageId: "kxsph5C",
  },
  {
    id: 5,
    name: "Chefchaouen, Marocco",
    description:
      "There are a few theories on why the houses are painted blue, including that the color repels mosquitos or that it symbolizes sky and heaven.",
    imageId: "rTqKo46",
  },
  {
    id: 6,
    name: "Gamcheon Culture Village in Busan, South Korea",
    description:
      "In 2009, the village was converted into a cultural hub by painting the houses and featuring exhibitions and art installations.",
    imageId: "ZfQOOzf",
  },
];
