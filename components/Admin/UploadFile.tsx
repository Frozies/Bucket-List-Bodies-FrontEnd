import {useEffect, useState} from "react";
import { useMutation, gql } from "@apollo/client";
import React from "react";

const SINGLE_UPLOAD = gql`
    mutation($file: Upload!) {
        singleUpload(file: $file) {
            filename
            mimetype
            encoding
            url
        }
    }
`;

export const UploadFile = () => {
    const [lastUploaded, setLastUploaded] = useState({});
    const [mutate, { loading, error, data }] = useMutation(SINGLE_UPLOAD);
    const onChange = ({
                          target: {
                              validity,
                              files: [file]
                          }
                      }: any) => validity.valid && mutate({ variables: { file } });

    useEffect(() => {
        if (data) setLastUploaded(data.singleUpload);
    }, [data]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{JSON.stringify(error, null, 2)}</div>;

    return (
        <div>
            <input type="file" required onChange={onChange} />
            <br/>
            {Object.keys(lastUploaded).length !== 0 && (
                <div>
                    {" "}
                    Last uploaded details ={">"} {JSON.stringify(lastUploaded, null, 2)}{" "}
                </div>
            )}
        </div>
    );
};
