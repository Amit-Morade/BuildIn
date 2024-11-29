import React, { useState } from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography, Link } from "@mui/material";
// import abc from "../../abc.jpg";

export default function PostCard({ text, pic }: { text: string; pic?: boolean }) {
    const [showMore, setShowMore] = useState(false);

    // Define the limits
    const characterLimit = 150;
    const lineLimit = 3;

    // Split text into lines
    const textLines = text.split("\n");

    // Determine if the text exceeds character or line limits
    const isLongText = text.length > characterLimit || textLines.length > lineLimit;

    // Display either the truncated text by character or lines, whichever limit is reached first
    let displayedText;
    if (showMore || !isLongText) {
        displayedText = text;
    } else if (text.length > characterLimit) {
        displayedText = text.slice(0, characterLimit) + "...";
    } else {
        displayedText = textLines.slice(0, lineLimit).join("\n") + "...";
    }

    return (
        <Card sx={{ maxWidth: 500, margin: "20px 0px" }} variant="outlined">
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Amit
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", whiteSpace: "pre-line" }}>
                        {displayedText}
                        {!showMore && isLongText && (
                            <Link
                                component="button"
                                variant="body2"
                                onClick={() => setShowMore(true)}
                                sx={{ ml: 1, color: 'primary.main', cursor: 'pointer', textDecoration: 'underline' }}
                            >
                                more
                            </Link>
                        )}
                    </Typography>
                </CardContent>
                {/* {pic && (
                    <CardMedia
                        component="img"
                        height="140"
                        image={abc}
                        alt="green iguana"
                    />
                )} */}
            
        </Card>
    );
}
