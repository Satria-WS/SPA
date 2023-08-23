import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const DUMMY_PLACES = [
  {
    id: "1",
    title: "Rome building",
    description: "one of the wornders of the world ",
    imageUrl: "https://cdn.britannica.com/75/75775-131-1D05DD74/Colosseum-Rome.jpg",
    address: "Piazza del Colosseo, 1, 00184 Roma RM, Italy",
    location: {
      lat: 41.8899676,
      lng: 12.4911978,
    },
    creatorId:"u1"
  },
  {
    id: "2",
    title: "Eiffel Tower",
    description: "Iconic Parisian landmark",
    imageUrl: "http://surl.li/gzynw",
    address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
    location: {
      lat: 48.8588443,
      lng: 2.2943506,
    },
    creatorId:"u2"
  },
  {
    id: "3",
    title: "Statue of Liberty",
    description: "Symbol of freedom in the USA",
    imageUrl: "http://surl.li/kizbp",
    address: "Liberty Island, New York, NY 10004, USA",
    location: {
      lat: 40.689247,
      lng: -74.044502,
    },
    creatorId:"u3"
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creatorId === userId)
  return <PlaceList items={loadedPlaces}  />;
};
export default UserPlaces;

// Gambir, Central Jakarta City, Jakarta
// https://cdn.britannica.com/75/75775-131-1D05DD74/Colosseum-Rome.jpg
// https://www.google.com/maps/search/Colosseum/@41.8899676,12.4911978,17z?entry=ttu
