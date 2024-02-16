"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { useMap } from "@/components/Map/MapProvider";
import { YMap } from "@yandex/ymaps3-types/imperative/YMap";


export const Map = () => {
    const mapRef = useRef<(YMap & { container: HTMLElement }) | null>(null);
    const { reactifyApi } = useMap();

    if (!reactifyApi) return <>loading</>;

    const {
        YMap,
        YMapMarker,
        YMapListener,
        YMapDefaultSchemeLayer,
        YMapDefaultFeaturesLayer,
    } = reactifyApi;

    return (
        <YMap
            ref={mapRef}
            margin={[20, 20, 20, 20]}
            location={{
                zoom: 17,
                center: [76.860296, 43.206904]
            }}
        >
            <YMapDefaultSchemeLayer />
            <YMapDefaultFeaturesLayer />
            <YMapMarker coordinates={[76.860296,43.206904]}>
                <Image src="/img/pin.png" alt="" width={50} height={50} />
            </YMapMarker>
            <YMapListener />
        </YMap>
    );
};