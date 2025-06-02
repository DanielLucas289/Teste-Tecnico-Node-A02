SELECT
    EXTRACT(MONTH FROM created_at) AS mes, 
    SUM(total_amount) AS soma_total_pedidos -- Calcula a soma do valor total dos pedidos
FROM
    orders
    
WHERE
    EXTRACT(YEAR FROM created_at) = 2024   -- Filtra os pedidos para o ano de 2024
    
GROUP BY
    EXTRACT(MONTH FROM created_at)         -- Agrupa os resultados pelo mês

ORDER BY                                   -- ordena os resultados pelo mês
    mes;                                
