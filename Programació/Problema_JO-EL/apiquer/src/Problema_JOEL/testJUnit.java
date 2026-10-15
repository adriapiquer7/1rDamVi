package Problema_JOEL;

import org.junit.Test;
import static org.junit.Assert.*;
import java.util.ArrayList;

public class testJUnit {
	
    private String simular(String[] entrades) {
        ArrayList<String> pokedex = new ArrayList<>();
        for (String nom : entrades) {
            if (nom.equals("FIN")) break;
            pokedex.add(nom);
        }
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < pokedex.size(); i++) {
            sb.append((i + 1) + ". " + pokedex.get(i) + "\n");
        }
        sb.append("Total: " + pokedex.size() + " Pokémon capturats");
        return sb.toString();
    }

    // Test 1: Cas normal amb 3 Pokémon
    @Test
    public void testCasNormal() {
        String resultat = simular(new String[]{"Pikachu", "Charmander", "Bulbasaur", "FIN"});
        assertTrue(resultat.contains("1. Pikachu"));
        assertTrue(resultat.contains("2. Charmander"));
        assertTrue(resultat.contains("3. Bulbasaur"));
        assertTrue(resultat.contains("Total: 3 Pokémon capturats"));
    }

    // Test 2: Un sol Pokémon (cas mínim)
    @Test
    public void testUnPokemon() {
        String resultat = simular(new String[]{"Mewtwo", "FIN"});
        assertTrue(resultat.contains("1. Mewtwo"));
        assertTrue(resultat.contains("Total: 1 Pokémon capturats"));
    }

    // Test 3: FIN no apareix a la llista
    @Test
    public void testFINNoSurt() {
        String resultat = simular(new String[]{"Gengar", "FIN"});
        assertFalse(resultat.contains("FIN"));
    }

    // Test 4: Numeració correcta
    @Test
    public void testNumeracio() {
        String resultat = simular(new String[]{"Squirtle", "Jigglypuff", "Snorlax", "Eevee", "FIN"});
        assertTrue(resultat.contains("4. Eevee"));
    }

    // Test 5: Pokémon amb nom llarg
    @Test
    public void testNomLlarg() {
        String resultat = simular(new String[]{"Charizard", "Venusaur", "Blastoise", "Alakazam", "Machamp", "FIN"});
        assertTrue(resultat.contains("Total: 5 Pokémon capturats"));
        assertTrue(resultat.contains("5. Machamp"));
    }
}