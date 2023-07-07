import java.io.BufferedReader;
import java.io.InputStreamReader;

public class LA3 {
    public static void main(String[] args) throws Exception{
        BufferedReader input = new BufferedReader(new InputStreamReader(System.in));
            System.out.println("Ordo Matriks = 3x3");
            int [][] matriks = new int[3][3];
            System.out.println("Masukkan elemen matriksnya = ");
            for(int i=0;i<3;i++){
                for(int j=0;j<3;j++){
                    System.out.print("Elemen ["+(i+1)+","+(j+1)+"] = ");
                    matriks[i][j] = Integer.parseInt(input.readLine());
                }
            }
            for(int i=0;i<3;i++){
                System.out.print("|");
                for(int j=0;j<3;j++){
                    System.out.print(matriks[i][j]+" ");
                }
                System.out.println("|");
            }
            int dtr=(matriks[0][0]*matriks[1][1]*matriks[2][2]
            +matriks[0][1]*matriks[1][2]*matriks[2][0]
            +matriks[0][2]*matriks[1][0]*matriks[2][1]
            -matriks[0][2]*matriks[1][1]*matriks[2][0]
            -matriks[0][0]*matriks[1][2]*matriks[2][1]
            -matriks[0][1]*matriks[1][0]*matriks[2][2]);
            System.out.println("Determinannya = "+dtr);
    }
}