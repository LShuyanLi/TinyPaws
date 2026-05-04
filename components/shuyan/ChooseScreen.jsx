import PokeCatBall from "@/components/shuyan/PokeCatBall";

export default function ChooseScreen({ goToPlay }) {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "88vh",
        backgroundColor: "#ffd6b3",
      }}
    >

      <h1
        style={{
          margin: 0,
          paddingTop: "5vh",
          textAlign: "center",
          color: "#f97316",
          fontSize: "clamp(2rem, 4vw, 3.3rem)",
          fontWeight: "700",
          letterSpacing: "0.03em",
        }}
      >
        Choose Your New Little Friend
      </h1>

      <div
        style={{
          position: "relative",
          zIndex: 5,
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-start",
          marginTop: "8vh",
          padding: "0 4vw",
          boxSizing: "border-box",
        }}
      >
        <PokeCatBall image="/CloseBall.svg" goToPlay={goToPlay} />
        <PokeCatBall image="/CloseBall.svg" goToPlay={goToPlay} />
        <PokeCatBall image="/CloseBall.svg" goToPlay={goToPlay} />
      </div>

      <div
        style={{
          position: "absolute",
          left: 0,
          bottom: "7.5vh",
          width: "100%",
          height: "10vh",
          backgroundColor: "#ffc083",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          height: "7.5vh",
          backgroundColor: "#e97800",
        }}
      />
    </section>
  );
}