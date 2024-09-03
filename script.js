function calcularChurrasco() {
    const homens = parseInt(document.getElementById('homens').value);
    const mulheres = parseInt(document.getElementById('mulheres').value);
    const criancas = parseInt(document.getElementById('criancas').value);

    // Calcular em gramas e mililitros
    const carneGramas = (homens * 500) + (mulheres * 300) + (criancas * 200);
    const frangoGramas = (homens * 200) + (mulheres * 200) + (criancas * 100);
    const linguicaGramas = (homens * 200) + (mulheres * 200) + (criancas * 200);
    const refrigeranteMl = (homens * 300) + (mulheres * 400) + (criancas * 200);
    const cervejaMl = (homens * 800) + (mulheres * 500);

    // Converter para quilos e litros
    const carneKg = carneGramas / 1000;
    const frangoKg = frangoGramas / 1000;
    const linguicaKg = linguicaGramas / 1000;
    const refrigeranteL = refrigeranteMl / 1000;
    const cervejaL = cervejaMl / 1000;

    document.getElementById('resultados').innerHTML = `
        <p>Carne bovina: ${carneKg} kg</p>
        <p>Frango: ${frangoKg} kg</p>
        <p>Linguiça: ${linguicaKg} kg</p>
        <p>Refrigerante: ${refrigeranteL} litros</p>
        <p>Cerveja: ${cervejaL} litros</p>
    `;
}
