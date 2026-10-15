package Problema_JOEL;

import java.util.ArrayList;
import java.util.Scanner;

public class LaMevaMokedex {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<String> pokedex = new ArrayList<>();

        String nom = sc.nextLine();
        while (!nom.equals("FIN")) {
            pokedex.add(nom);
            nom = sc.nextLine();
        }

        for (int i = 0; i < pokedex.size(); i++) {
            System.out.println((i + 1) + ". " + pokedex.get(i));
        }
        System.out.println("Total: " + pokedex.size() + " Pokémon capturats");
    }
}

