import { CardContainer, Image, Text, TimeContainer } from "./card.styled";

const Card = (props) => {
    const { rival, img, date, day, time, stadium, option } = props;

    return (
        <CardContainer option={option} rival={rival}>
                <Text>{rival}</Text>
                <Image src={img} alt={rival} />
                <TimeContainer>
                    <Text as="p">{date}</Text>
                    <Text as="p">{day}</Text>
                    <Text as="p">{time}</Text>
                </TimeContainer>
                <Text as="h3">{stadium}</Text>
        </CardContainer>)
}

export default Card;